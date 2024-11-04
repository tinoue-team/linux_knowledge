import mermaid from 'mermaid';
import { useEffect, useRef, useState } from 'preact/hooks';

export default function ThemeReact({ src }: { src: string }) {
    const mermaidRef = useRef<HTMLDivElement>(null);

    const [theme, setTheme] = useState<'default' | 'dark'>(
        document.documentElement.dataset.theme === 'light' ? 'default' : 'dark',
    );

    // mermaidの再レンダリング用の関数
    const renderMermaid = async () => {
        try {
            if (!mermaidRef.current) return;
            // 既存のmermaid要素をクリア
            // const element = document.querySelector('.mermaid');
            // if (element) {
            //     element.innerHTML = src;
            // }

            // DOMの準備を待つ
            await new Promise(resolve => setTimeout(resolve, 0));

            // mermaidの初期化と再レンダリング
            await mermaid.initialize({
                startOnLoad: false,
                theme: theme,
                securityLevel: 'loose', // SVG レンダリングの制限を緩和
            });

            // 既存の内容をクリア
            mermaidRef.current.innerHTML = src;

            // ユニークなIDを生成
            const uniqueId = `mermaid-${Date.now()}`;

            // レンダリング前にDOMの準備ができていることを確認
            await new Promise(resolve => setTimeout(resolve, 100));

            // mermaidのレンダリング
            const { svg } = await mermaid.render(uniqueId, src);

            // SVGを挿入
            if (mermaidRef.current) {
                mermaidRef.current.innerHTML = svg;
            }

            // await mermaid.run({
            //     querySelector: '.mermaid',
            // });
        } catch (error) {
            console.error('Mermaid rendering error:', error);
        }
    };

    // 初回レンダリング時
    //// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        // コールバック関数を定義
        const observerCallback: MutationCallback = (mutationsList: MutationRecord[]) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const newTheme =
                        document.documentElement.dataset.theme === 'light' ? 'default' : 'dark';
                    setTheme(newTheme || 'light');
                }
            }
        };

        // MutationObserverを作成し、HTML ルート要素の属性の変更を監視
        const observer = new MutationObserver(observerCallback);
        observer.observe(document.documentElement, { attributes: true });

        // renderMermaid();
        // 初回レンダリング
        const timer = setTimeout(() => {
            renderMermaid();
        }, 0);

        // クリーンアップ関数を返す(コンポーネントのアンマウント時に監視を停止: メモリーリーク対策)
        return () => {
            observer.disconnect();
            clearTimeout(timer);
        };
    }, [src]);

    // テーマが変更された時に再レンダリング
    //// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        // renderMermaid();
        const timer = setTimeout(() => {
            renderMermaid();
        }, 100);

        return () => clearTimeout(timer);
    }, [theme]);

    return (
        <>
            {/* <div ref={mermaidRef} class='mermaid'>
                {src}
            </div> */}
            <div
                ref={mermaidRef}
                class='mr-auto ml-auto max-w-fit rounded-lg border border-solid p-4'
            >
                {src}
            </div>
        </>
    );
}
